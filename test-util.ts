import {readFile} from 'mz/fs'
import {
  Configuration,
  FormatterConstructor,
  IRuleFailureJson,
  Linter,
  RuleFailure,
} from 'tslint'

interface ILintResult {
  failures: ReadonlyArray<IRuleFailureJson>
  errorCount: number
  warningCount: number
  fixes: ReadonlyArray<IRuleFailureJson>
  format: string | FormatterConstructor
  output: string
}

const basePath = process.cwd()
const configuration = Configuration.loadConfigurationFromPath('./tslint.json')
const program = Linter.createProgram('./tsconfig.json')
const linter = new Linter({fix: false}, program)

/**
 * Run linting analysis on a fixture
 * @param fixtureName Filename relative to fixtures/
 * @return Lint results
 */
export async function lintFixture(fixtureName: string): Promise<ILintResult> {
  const fileName = `./fixtures/${fixtureName}`
  const file = await readFile(fileName, 'utf8')
  linter.lint(fileName, file, configuration)
  const {failures, output, fixes = [], ...result} = linter.getResult()
  return {
    ...result,
    failures: failures.map(failureToJson),
    fixes: fixes.map(failureToJson),
    output: output.split(basePath).join('.'),
  }
}

function failureToJson(failure: RuleFailure): IRuleFailureJson {
  const {name, ...json} = failure.toJson()
  return {...json, name: name.split(basePath).join('.')}
}

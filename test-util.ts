import {readFile} from 'mz/fs'
import {
  Configuration,
  FormatterConstructor,
  IRuleFailureJson,
  Linter,
  RuleFailure,
} from 'tslint'

export interface ILintResult {
  readonly failures: ReadonlyArray<IRuleFailureJson>
  readonly errorCount: number
  readonly warningCount: number
  readonly fixes: ReadonlyArray<IRuleFailureJson>
  readonly format: string | FormatterConstructor
  readonly output: string
}

const basePath = process.cwd()
const configuration = Configuration.loadConfigurationFromPath('./tslint.json')
const linter = new Linter({fix: true}, Linter.createProgram('./tsconfig.json'))

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

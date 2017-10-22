import {Configuration} from 'tslint'

describe('Configuration', () => {
  it('should be valid for base config', () => {
    Configuration.loadConfigurationFromPath('./index')
  })
})

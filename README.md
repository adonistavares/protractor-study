# protractor-study
Repository for Protractor practice

## Issues found:
### VS Code not executing Protractor command-line
Due to a restriction with Windows Execution Policies (https://docs.microsoft.com/en-ca/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7), VS Code was not able to run Protractor command-line.

This was resolved changing policy for CurrentUser:
Get-ExecutionPolicy -List
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

### Failing trying to connect to Enterprise GitHub


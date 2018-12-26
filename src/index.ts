import { NgModule, Injectable } from '@angular/core'
import { Theme } from 'terminus-core'

@Injectable()
class PurpleDreamTheme extends Theme {
    name = 'Purple Dream'
    css = require('./theme.scss')
    terminalBackground = '#9370DB'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: PurpleDreamTheme, multi: true },
    ],
})
export default class PurpleDreamThemeModule { }

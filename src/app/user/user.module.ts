//This is s lazy loader module or a feature module not too much unlike the app module
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes) //for the app module it was .forRoot
    ],
    declarations: [
        ProfileComponent
    ],
    providers: []
})

export class UserModule {}
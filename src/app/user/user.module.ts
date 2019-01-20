//This is s lazy loader module or a feature module not too much unlike the app module
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes) //for the app module it was .forRoot
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: []
})

export class UserModule {}
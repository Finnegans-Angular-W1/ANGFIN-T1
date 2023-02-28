import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserProfileRoutingModuleModule } from './user-profile-routing-module.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { RtitleComponent } from '../../shared/components/rtitle/rtitle.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [UserProfileComponent, PasswordResetComponent, EditarPerfilComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    UserProfileRoutingModuleModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}

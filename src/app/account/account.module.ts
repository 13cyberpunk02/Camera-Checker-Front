import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRountingModule } from './account-rounting.module';
import { SharedModule } from '../shared/shared.module';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterWithThirdPartyComponent } from './register-with-third-party/register-with-third-party.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { VKLoginProvider } from '@abacritt/angularx-social-login'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ConfirmEmailComponent,
    SendEmailComponent,
    ResetPasswordComponent,
    RegisterWithThirdPartyComponent
  ],
  imports: [
    CommonModule,
    AccountRountingModule,
    SharedModule,
    SocialLoginModule

  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: VKLoginProvider.PROVIDER_ID,
            provider: new VKLoginProvider('51786612')
          }
        ],
        onError: (error: any) => {
          console.log(error)
        }
      } as SocialAuthServiceConfig,
    }
  ]
})
export class AccountModule { }

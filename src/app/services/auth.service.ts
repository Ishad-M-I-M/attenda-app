import { Injectable } from '@angular/core';
import { AsgardeoSPAClient, AuthClientConfig } from '@asgardeo/auth-spa';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = AsgardeoSPAClient.getInstance();

  constructor() {
    this.auth!.initialize({
      signInRedirectURL: environment.signInRedirectUrl,
      clientID: environment.clientID, // Use clientID (not clientId)
      baseUrl: environment.baseUrl,
      scope: environment.scope,
    } as AuthClientConfig).then(() => {
      console.log('Asgardeo Auth Client initialized successfully');
    });
  }

  signIn() {
    return this.auth!.signIn();
  }

  signOut() {
    return this.auth!.signOut();
  }

  async isAuthenticated(): Promise<boolean> {
    const result = await this.auth!.isAuthenticated();
    return !!result;
  }

  getBasicUserInfo() {
    return this.auth!.getBasicUserInfo();
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-oauthserver',
  templateUrl: './oauthserver.component.html',
  styleUrls: ['./oauthserver.component.css']
})
export class OauthserverComponent implements OnInit {
  userInfo = '';

  constructor() { }

  ngOnInit() {
  }

  Login() {
    // tslint:disable-next-line:max-line-length
    this.userInfo = '<href="https://mixer.com/oauth/authorize?response_type=token&redirect_uri=http://hyperchucksgaming.com&scope=user:details:self&client_id=f4d214efea81457623beb93ce18d941c4e997be681350dbd"';
    return this.userInfo;
  }

}

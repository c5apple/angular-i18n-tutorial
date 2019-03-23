import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  param = { value: 'world' };

  currentLang: string;

  constructor(private translate: TranslateService) {
    this.setCurrentLang(this.getNavigatorLang());
  }

  /** ブラウザの設定言語を取得する */
  private getNavigatorLang(): string {
    const userLang = navigator.language.split('-')[0];
    const lang = /(en|ja)/gi.test(userLang) ? userLang : 'ja';
    return lang;
  }

  /** 言語を設定する */
  private setCurrentLang(lang: any): void {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.currentLang = lang;
  }
}

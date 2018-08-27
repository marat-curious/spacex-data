import {h, Component} from 'preact';
import * as imgLogo from '../assets/logo.svg';

export function Header() {
  return (
    <div class="header">
      <div class="header__logo">
        <img src={imgLogo} />
      </div>
      <nav class="header__nav">
        <a class="header__nav-item">Запуски</a>
        <a class="header__nav-item">Посадки</a>
        <a class="header__nav-item">Заказчики</a>
        <a class="header__nav-item">Повторное использование</a>
      </nav>
    </div>
  );
}

import {h, Component} from 'preact';
import * as imgLogo from '../assets/logo.svg';

export function Header() {
  return <nav><img src={imgLogo} /></nav>;
}

import {Component, Type} from '@angular/core';

export interface RouterLink {
  id: number;
  name: string;
  url: string;
  iconUrl: string;
  component: Type<any>;
}

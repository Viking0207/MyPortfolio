import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  animateChild,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('IntroPG => HobbyPG, IntroPG => VisionPG, IntroPG => QuotesPG, HobbyPG => VisionPG, HobbyPG => QuotesPG, VisionPG => QuotesPG', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.5s ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('0.5s ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('QuotesPG => VisionPG, QuotesPG => HobbyPG, QuotesPG => IntroPG, VisionPG => HobbyPG, VisionPG => IntroPG, HobbyPG => IntroPG', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.5s ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('0.5s ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);

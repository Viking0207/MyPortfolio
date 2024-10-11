import {
       trigger,
       transition,
       style,
       query,
       group,
       animate,
       animateChild,
     } from '@angular/animations';

     //whats intro
     //insta hobby
     //tweet vision
     //email quotes
     
     export const contactContentAnimation = trigger('contentAnimation', [
       transition('Whats => Insta, Whats => Tweet, Whats => Email, Insta => Tweet, Insta => Email, Tweet => Email', [
         style({ position: 'relative' }),
         query(':enter, :leave', [
           style({
             position: 'absolute',
             top: 0,
             left: 0,
             width: '100%',
           }),
         ]),
         query(':enter', [style({ top: '100%' })]),
         query(':leave', animateChild()),
         group([
           query(':leave', [animate('0.5s ease-out', style({ top: '-100%' }))]),
           query(':enter', [animate('0.5s ease-out', style({ top: '0%' }))]),
         ]),
         query(':enter', animateChild()),
       ]),
       transition('Email => Tweet, Email => Insta, Email => Whats, Tweet => Insta, Tweet => Whats, Insta => Whats', [
         style({ position: 'relative' }),
         query(':enter, :leave', [
           style({
             position: 'absolute',
             top: 0,
             left: 0,
             width: '100%',
           }),
         ]),
         query(':enter', [style({ top: '-100%' })]),
         query(':leave', animateChild()),
         group([
           query(':leave', [animate('0.5s ease-out', style({ top: '100%' }))]),
           query(':enter', [animate('0.5s ease-out', style({ top: '0%' }))]),
         ]),
         query(':enter', animateChild()),
       ]),
     ]);
     
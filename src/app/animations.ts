// Documentación: https://angular.io/guide/route-animations

import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('700ms cubic-bezier(0.61, 1, 0.88, 1)', style({ left: '100%', opacity: 0 }))
        ], {optional: true} ),
        query(':enter', [
          animate('700ms cubic-bezier(0.61, 1, 0.88, 1)', style({ left: '0%' }))
        ]),
        query('@*', animateChild())
      ]),
    ])
  ]);
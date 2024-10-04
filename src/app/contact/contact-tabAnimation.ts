import {
       animate,
       state,
       style,
       transition,
       trigger,
} from '@angular/animations';

export const contactTabAnimation = trigger('tabAnimation', [
       state(
         'selected',
         style({ transform: 'scale(1.2) rotateY(360deg)', zIndex: 10 })
       ),
       state('not-selected', style({ transform: 'scale(0.8)', opacity: 0.6 })),
       state('top', style({ transform: 'translateY(-30px) scale(0.8)' })),
       state('bottom', style({ transform: 'translateY(30px) scale(0.8)' })),
       state('hidden', style({ display: 'none' })),
       transition('* => selected', [animate('0.8s ease')]),
       transition('* => not-selected', [animate('0.8s ease')]),
       transition('* => top', [animate('0.8s ease')]),
       transition('* => bottom', [animate('0.8s ease')]),
       transition('* => hidden', [animate('0.8s ease')]),
     ]);
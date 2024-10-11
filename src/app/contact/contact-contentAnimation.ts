// import {
//   animate,
//   style,
//   transition,
//   trigger,
//   query,
//   group,
// } from '@angular/animations';

// export const contactContentAnimation = trigger('contentAnimation', [
//   transition(':increment', [
//     group([
//       // Ketika tab pindah ke bawah (increment), konten bergerak keluar ke atas
//       query(
//         ':leave',
//         [
//           animate(
//             '0.5s ease-out',
//             style({ opacity: 0, transform: 'translateY(-100px)' })
//           ),
//         ],
//         { optional: true }
//       ),
//       // Konten masuk dari bawah
//       query(
//         ':enter',
//         [
//           style({ opacity: 0, transform: 'translateY(100px)' }),
//           animate(
//             '0.5s ease-out',
//             style({ opacity: 1, transform: 'translateY(0)' })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
//   transition(':decrement', [
//     group([
//       // Ketika tab pindah ke atas (decrement), konten bergerak keluar ke bawah
//       query(
//         ':leave',
//         [
//           animate(
//             '0.5s ease-out',
//             style({ opacity: 0, transform: 'translateY(100px)' })
//           ),
//         ],
//         { optional: true }
//       ),
//       // Konten masuk dari atas
//       query(
//         ':enter',
//         [
//           style({ opacity: 0, transform: 'translateY(-100px)' }),
//           animate(
//             '0.5s ease-out',
//             style({ opacity: 1, transform: 'translateY(0)' })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);

import {Component} from '@angular/core';


@Component({
  styles: ['.info { color: #282; }'],
  template: `
    <p class="info">You could be here if not signed in</p>
    <p>{{text}}</p>
`
})
export class PublicComponent {
  text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sit amet arcu et sodales. Donec eu dolor in sem pulvinar auctor. Maecenas viverra pretium sapien, sed faucibus sem. Morbi facilisis blandit neque, sed tincidunt orci ultrices ac. Nunc ut consectetur mauris. Aliquam vitae quam convallis, rutrum libero ut, facilisis nulla. Integer sed dignissim nunc, at dignissim risus. Proin sed dapibus neque, ut fringilla turpis. Donec tristique efficitur felis. Nulla vestibulum quam ac erat aliquam hendrerit. Maecenas eu faucibus arcu. Vivamus iaculis est odio, quis finibus libero pretium vel. Sed augue purus, euismod vel scelerisque vitae, luctus sit amet tortor. Praesent risus elit, vulputate at tincidunt sit amet, malesuada non leo. Pellentesque ullamcorper ligula a mi sollicitudin, a fringilla ipsum hendrerit. Aliquam consequat ante ac aliquam volutpat.`;
}

import {Component} from '@angular/core';
import {Friend} from "./friend.interface";

@Component({
  styles: ['.warn { color: #822; }'],
  template: `
  <p class="warn">You shouldn't be here if not signed in</p>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Added</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let friend of friends">
        <td>{{friend.firstname}}</td>
        <td>{{friend.lastname}}</td>
        <td>{{friend.email}}</td>
        <td>{{friend.added | date}}</td>
      </tr>
    </tbody>
  </table>
`
})
export class FriendsComponent {
  friends: Friend[] = [
    {firstname: "John", lastname: "Doe", email: "john@example.com", added: new Date()},
    {firstname: "Mary", lastname: "Doe", email: "mary@example.com", added: new Date()},
    {firstname: "July", lastname: "Dooley", email: "july@example.com", added: new Date()}
  ];
}

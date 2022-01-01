import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-active-transactions',
  templateUrl: './active-transactions.component.html',
  styleUrls: ['./active-transactions.component.css']
})
export class ActiveTransactionsComponent implements OnInit {

  allPosts:any;
  constructor(private db: AngularFirestore){
    this.db.collection('posts').valueChanges().subscribe(res=>{
      this.allPosts=res;
      let userID = localStorage.getItem("USER_ID") 
      this.allPosts=this.allPosts.filter(d=>d.userId == userID);

    })
  }

  ngOnInit(): void {
  }

}

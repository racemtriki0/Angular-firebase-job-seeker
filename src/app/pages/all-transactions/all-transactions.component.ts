import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/directives/sortable.directive';
import { TransactionsDataService } from 'src/app/services/transactionsData/transactions-data.service';
import { transaction } from 'src/app/variables/transaction';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css'],
  providers: [TransactionsDataService, DecimalPipe]
})
export class AllTransactionsComponent implements OnInit {

  jobPost = {
    title:"",
    description:"",
    companyName:"",
    category:"",
    experience:"",
    education:"",
    adress:"",
    city:"",
    country:"",
    zip:"",
    phone:"",
    email:"",
    userId:"",
    date:""
  }
  cats = ["Architecture et Construction","technologies de l'information","Finance et commerce",
  "Hôtellerie et Tourisme","Ressources humaines","Télécommunications","Pharmaceutiques","Electronique",
  "Marketing","Mécanique","Agriculture","Immobilier","Sante","Vente"]
  constructor(private db: AngularFirestore,private router:Router) {
    this.jobPost.userId = localStorage.getItem("USER_ID");
    this.jobPost.date = (new Date().getMonth()+1)+"/" +new Date().getDate()+"/"+new Date().getFullYear();
   }
  ngOnInit(): void {
  }
  changeCat(cat){
    this.jobPost.category = cat;
  }
  submitAddPost(){
    this.db.collection('posts').add(this.jobPost);
    this.router.navigateByUrl("/myPosts");
  }
}

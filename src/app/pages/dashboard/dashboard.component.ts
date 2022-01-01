import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  postOpened="";
  allPosts:any;
  cats = ["tout","Architecture et Construction","technologies de l'information","Finance et commerce",
  "Hôtellerie et Tourisme","Ressources humaines","Télécommunications","Pharmaceutiques","Electronique",
  "Marketing","Mécanique","Agriculture","Immobilier","Sante","Vente"]
  constructor(private db: AngularFirestore){
    this.db.collection('posts').valueChanges().subscribe(res=>{
      this.allPosts=res;
    })
  }
  ngOnInit() {
  }
 /*  cats = ["tout","Agriculture, Food, and Natural Resources","Architecture and Construction",
  "Arts, Audio/Video Technology, and Communication","Business and Finance",
  "Education and Training","Government and Public Administration","Information Technology","technologies de l'information","Marketing"] */
  openPost(postTitle){
    this.postOpened = this.postOpened !=postTitle ?postTitle:"";
  }
  filter(cat){
    this.db.collection('posts').valueChanges().subscribe(res=>{
      this.allPosts=res;
      if(cat!="tout")
      this.allPosts=this.allPosts.filter(d=>d.category == cat);
    })
  }

}

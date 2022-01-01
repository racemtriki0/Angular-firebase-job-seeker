import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { map } from "@firebase/util";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  submitted = false;
  email: any = "";
  password: any = "";

  constructor(
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    private router: Router
  ) {}
  ngOnInit() {
    let jwt: any = localStorage.getItem("JWT");
    if (jwt && jwt != "") this.router.navigateByUrl("");

    this.registerForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  ngOnDestroy() {}s
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const users = this.db.collection("users").valueChanges();
    users.subscribe((data: any) => {
      var varie=true;
      data.forEach((user: any) => {
        if (user.email == this.email && user.password == this.password) {
          varie=false;
          let users: AngularFirestoreCollection = this.db.collection("users",ref => ref.where('email', '==', this.email));
          users.snapshotChanges().subscribe((res: any) => {
              let id = res[0].payload.doc.id;
              localStorage.setItem("USER_EMAIL", user.email);
              localStorage.setItem("USER_ID", id);
              localStorage.setItem("JWT", "DUMY_JWT");
              this.router.navigateByUrl("");
            });

        }
        if(varie==true){
          alert("mot de passe incorrect !!!");
          //this.router.navigateByUrl("/erreur");
        }
      });
    });
  }
}

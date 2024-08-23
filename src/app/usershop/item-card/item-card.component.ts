import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  productById: any;
  added: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const button = document.querySelector(".addtocart") as HTMLButtonElement | null;
    const done = document.querySelector(".done") as HTMLElement | null;
    console.log(button);

    if (button && done) {
      button.addEventListener('click', () => {
        if (this.added) {
          done.style.transform = "translate(-110%) skew(-40deg)";
          this.added = false;
        } else {
          done.style.transform = "translate(0px)";
          this.added = true;
        }
      });
    }
  }
}

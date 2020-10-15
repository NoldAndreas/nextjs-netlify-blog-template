//import React from "react"
//import { css } from "@emotion/core"

//import { rhythm } from "../utils/typography"
import {Card,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import myCard_styles from "./My_card.module.css"

export default function My_card({title,src,href,children }) {
  return(
    <Card className="mt-3 text-left" style={{ height: '14rem' }}>
      <Card.Link href={href}>
      <Image
        src = {src}
        className = {myCard_styles.card_img_top}
        alt="random image"
      />
      </Card.Link>
      <Card.Body>
        <Card.Link href={href}>
        <Card.Title className={myCard_styles.titleStyle}>{title}</Card.Title>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}


/*
<Card.Text>
{children}
</Card.Text>
//aber funktioniert irgendwie nicht:
<div class="card text-left mb-3">
  <img class="card-img-top" src={im} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>*/

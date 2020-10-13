//import React from "react"
//import { css } from "@emotion/core"
//import "../styles/layout.css"
//import { rhythm } from "../utils/typography"
import {Card,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function My_card({title,src,href,children }) {
  return(
    <Card className="mt-3 text-left">
      <Card.Link href={href}>
      <Image
        src = {src}
        className = "card-img-top"
        alt="random image"
      />
      </Card.Link>
      <Card.Body>
        <Card.Link href={href}>
        <Card.Title>{title}</Card.Title>
        </Card.Link>
        <Card.Text>
        {children}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


/*
//aber funktioniert irgendwie nicht:
<div class="card text-left mb-3">
  <img class="card-img-top" src={im} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>*/

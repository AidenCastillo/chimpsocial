"use client";

import styles from "./css/compose.module.css";
import Image from "next/image";
import placeholder from "../../../public/placeholder.jpg";
import { useEffect, useRef, useState } from "react";
import AutoHeightTextArea from "./autotextbox"
import media from "../../../public/image.svg";
import gif from "../../../public/truck.svg";
import poll from "../../../public/list.svg";
import emoji from "../../../public/emoji.svg";
import schedule from "../../../public/calendar.svg"
import { getCookie } from "cookies-next";

export default function Compose() {

  function handleSubmit() {
    let data: any;
    data = document.getElementById("textarea")
    console.log(data.value)

    
    
    fetch('http://127.0.0.1:3000/api/whoops', {
      method: 'POST',
      headers: new Headers({
        // 'Content-Type': 'application/json',
      }),
      body: JSON.stringify({content: data.value, author: getCookie("id")}),
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      window.location.reload()
    }
    )
  }

  return (
		
    <div className={styles.compose}>
      <div className={styles.avatar}>
        <Image src={placeholder} alt="avatar" />
      </div>
      <div className={styles.draftArea}>
        <div className={styles.text}>
          {/* <input type="text" placeholder="What's happening?" /> */}
					<AutoHeightTextArea placeholder="What's happening"/>
        </div>
        <div className={styles.buttons}>
          <button>
            <Image src={media} width={20} height={20} alt="media" />
          </button>
					<button>
						<Image src={gif} width={20} height={20} alt="gif" />
					</button>
					<button>
						<Image src={poll} width={20} height={20} alt="poll" />
					</button>
					<button>
						<Image src={emoji} width={20} height={20} alt="emoji" />
					</button>
					<button>
						<Image src={schedule} width={20} height={20} alt="schedule" />
					</button>
        </div>
				<div className={styles.submit}>
					<button onClick={handleSubmit}>Whoop</button>
				</div>
      </div>
    </div>
  );
}

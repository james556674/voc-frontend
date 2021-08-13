import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AppBar, Card, Button, Tabs, Tab, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';

const Container = styled.div`
  font-family: sans-serif;
  max-width: 100%;
  
  margin-top: 4rem;
  min-height: 600px;
  overflow: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;  
  

  h2 {
    font-size: 1.3rem;
    color: rgb(112,112,112);
  }

  .separator {
    height: 1px;
    width: 100%;
    background-color: #e8e7e8;
    margin-top: 0.5rem;
  }

.flip-card {
  margin: 1rem;
  width: 200px;
  height: 230px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; 
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 5rem;
        color: rgb(112,112,112);
      }

    }

    /* Style the back side */
    .flip-card-back {
      transform: rotateY(180deg);
    }
  }
}

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
 
`

const JapaneseWorld = () => {
  const [mode, setMode] = useState("All Sounds")
  const [number, setNumber] = useState(1)
  const [value, setValue] = useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    setMode(event.target.innerHTML)
  };

  const dummyData = [
    {
      a: "あ",
      b: "a"
    },
    {
      a: "い",
      b: "i"
    },
    {
      a: "う",
      b: "u"
    },
    {
      a: "え",
      b: "e"
    },
    {
      a: "お",
      b: "o"
    },
    {
      a: "か",
      b: "ka"
    },
    {
      a: "き",
      b: "ki"
    },
    {
      a: "く",
      b: "ku"
    },
    {
      a: "け",
      b: "ke"
    },
    {
      a: "こ",
      b: "ko"
    },
    {
      a: "さ",
      b: "sa"
    },
    {
      a: "し",
      b: "shi"
    },
    {
      a: "す",
      b: "su"
    },
    {
      a: "せ",
      b: "se"
    },
    {
      a: "そ",
      b: "so"
    },
    {
      a: "た",
      b: "ta"
    },
    {
      a: "ち",
      b: "chi"
    },
    {
      a: "つ",
      b: "tsu"
    },
    {
      a: "て",
      b: "te"
    },
    {
      a: "と",
      b: "to"
    },
    {
      a: "な",
      b: "na"
    },
    {
      a: "に",
      b: "ni"
    },
    {
      a: "ぬ",
      b: "nu"
    },
    {
      a: "ね",
      b: "ne"
    },
    {
      a: "の",
      b: "no"
    },
    {
      a: "は",
      b: "ha"
    },
    {
      a: "ひ",
      b: "hi"
    },
    {
      a: "ふ",
      b: "fu"
    },
    {
      a: "へ",
      b: "he"
    },
    {
      a: "ほ",
      b: "ho"
    },
    {
      a: "ま",
      b: "ma"
    },
    {
      a: "み",
      b: "mi"
    },
    {
      a: "む",
      b: "mu"
    },
    {
      a: "め",
      b: "me"
    },
    {
      a: "も",
      b: "mo"
    },
    {
      a: "や",
      b: "ya"
    },
    {
      a: "ゆ",
      b: "yu"
    },
    {
      a: "よ",
      b: "yo"
    },
    {
      a: "ら",
      b: "ra"
    },
    {
      a: "り",
      b: "ri"
    },
    {
      a: "る",
      b: "ru"
    },
    {
      a: "れ",
      b: "re"
    },
    {
      a: "ろ",
      b: "ro"
    },
    {
      a: "わ",
      b: "wa"
    },
    {
      a: "を",
      b: "wo"
    },
    {
      a: "ん",
      b: "n"
    },
    
  ]

  const showCard = () => {
    
    const num = Math.floor(Math.random() * 46)
    setNumber(num)

  }

  const showContent = () => {
    if (mode === "All Sounds") {
      return (
        <div style={{
          display: "flex",
          width: "90%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {dummyData.map((data) => (
            <div className="flip-card">
              <div className="flip-card-inner">
                <Card className="flip-card-front">
                  <p>{data.a}</p>
                </Card>
                <Card className="flip-card-back">
                  <p>{data.b}</p>
                </Card>

              </div>


            </div>

          ))}

        </div>

      )
    }

    if(mode === "One Sound") {
      return (
        <>
          <Button variant="contained" color="primary" onClick={() => showCard()}>
            Change
          </Button>
          <div className="flip-card">
            <div className="flip-card-inner">
              <Card className="front flip-card-front">
                <p>{dummyData[number].a}</p>
              </Card>
              <Card className="back flip-card-back">
                <p>{dummyData[number].b}</p>
              </Card>

            </div>
          </div>
        </>
      )
    }
  }
  
  return (
    <div>
      <AppBar
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <MenuIcon />
        <Typography 
          variant="h6" 
          style={{
            flexGrow: 1,
            marginLeft: "2rem"
          }}>
          Japanese 50 Sounds
        </Typography>
      </AppBar>
      
      <Container>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          style={{
            marginBottom: "2rem",
          }}
        >
          <Tab label="All Sounds" />
          <Tab label="One Sound" />
        </Tabs>
        

        {showContent()}
        
      </Container>
      


    </div>
    
    
  )
}

export default JapaneseWorld

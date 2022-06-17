import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AppBar, Card, Button, Tabs, Tab, Typography, Tooltip } from "@material-ui/core"
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

.flip-card, .no-flip-card{
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

      .back-content {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        p {
          font-size: 5rem;
          color: rgb(112,112,112);
        }

        .rome {
          font-size: 1.5rem;
          position: absolute;
          bottom: 0;
        }
      }

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
  const [simNumber, setSimNumber] = useState(0)
  const [value, setValue] = useState(0)
  const [isRome, setIsRome] = useState(false)
  const [isFront, setIsFront] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    setMode(event.target.innerHTML)
  };

  const dummyData = [
    {
      a: "あ",
      b: "a",
      c: "ア"
    },
    {
      a: "い",
      b: "i",
      c: "イ"
    },
    {
      a: "う",
      b: "u",
      c: "ウ"
    },
    {
      a: "え",
      b: "e",
      c: "エ"
    },
    {
      a: "お",
      b: "o",
      c: "オ"
    },
    {
      a: "か",
      b: "ka",
      c: "カ"
    },
    {
      a: "き",
      b: "ki",
      c: "キ"
    },
    {
      a: "く",
      b: "ku",
      c: "ク"
    },
    {
      a: "け",
      b: "ke",
      c: "ケ"
    },
    {
      a: "こ",
      b: "ko",
      c: "コ"
    },
    {
      a: "さ",
      b: "sa",
      c: "サ"
    },
    {
      a: "し",
      b: "shi",
      c: "シ"
    },
    {
      a: "す",
      b: "su",
      c: "ス"
    },
    {
      a: "せ",
      b: "se",
      c: "セ"
    },
    {
      a: "そ",
      b: "so",
      c: "ソ"
    },
    {
      a: "た",
      b: "ta",
      c: "タ"
    },
    {
      a: "ち",
      b: "chi",
      c: "チ"
    },
    {
      a: "つ",
      b: "tsu",
      c: "ツ"
    },
    {
      a: "て",
      b: "te",
      c: "テ"
    },
    {
      a: "と",
      b: "to",
      c: "ト"
    },
    {
      a: "な",
      b: "na",
      c: "ナ"
    },
    {
      a: "に",
      b: "ni",
      c: "ニ"
    },
    {
      a: "ぬ",
      b: "nu",
      c: "ヌ"
    },
    {
      a: "ね",
      b: "ne",
      c: "ネ"
    },
    {
      a: "の",
      b: "no",
      c: "ノ"
    },
    {
      a: "は",
      b: "ha",
      c: "ハ"
    },
    {
      a: "ひ",
      b: "hi",
      c: "ヒ"
    },
    {
      a: "ふ",
      b: "fu",
      c: "フ"
    },
    {
      a: "へ",
      b: "he",
      c: "ヘ"
    },
    {
      a: "ほ",
      b: "ho",
      c: "ホ"
    },
    {
      a: "ま",
      b: "ma",
      c: "マ"
    },
    {
      a: "み",
      b: "mi",
      c: "ミ"
    },
    {
      a: "む",
      b: "mu",
      c: "ム"
    },
    {
      a: "め",
      b: "me",
      c: "メ"
    },
    {
      a: "も",
      b: "mo",
      c: "モ"
    },
    {
      a: "や",
      b: "ya",
      c: "ヤ"
    },
    {
      a: "ゆ",
      b: "yu",
      c: "ユ"
    },
    {
      a: "よ",
      b: "yo",
      c: "ヨ"
    },
    {
      a: "ら",
      b: "ra",
      c: "ラ"
    },
    {
      a: "り",
      b: "ri",
      c: "リ"
    },
    {
      a: "る",
      b: "ru",
      c: "ル"
    },
    {
      a: "れ",
      b: "re",
      c: "レ"
    },
    {
      a: "ろ",
      b: "ro",
      c: "ロ"
    },
    {
      a: "わ",
      b: "wa",
      c: "ワ"
    },
    {
      a: "を",
      b: "wo",
      c: "ヲ"
    },
    {
      a: "ん",
      b: "n",
      c: "ン"
    },
    
  ]

  const similarSound = [
    ["あ", "お"],
    ["ぬ", "め"],
    ["ね", "れ", "わ"],
    ["は", "ほ"],
    ["ろ", "る"],
    ["ア", "マ"],
    ["シ", "ツ"],
    ["ウ", "ワ"],
    ["ン", "ソ"],
  ]

  const showCard = () => {
    
    const num = Math.floor(Math.random() * 46)
    setNumber(num)

  }

  const similarSoundCards = () => {
    
    const num = Math.floor(Math.random() * 9)
    console.log("num", num)
    setSimNumber(num)
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
                  {isFront ? <p>{data.a}</p> : <p>{data.c}</p>}
                </Card>
                <Card className="flip-card-back">
                  <div className="back-content">
                    {isFront ? <p>{data.c}</p> : <p>{data.a}</p>}
                    {isRome && (
                      <>
                        <p className="rome">({data.b})</p>
                      </>
                    )}
                  </div>
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
          <div className="flip-card">
            <div className="flip-card-inner">
              <Card className="front flip-card-front">
                {isFront ? <p>{dummyData[number].a}</p> : <p>{dummyData[number].c}</p>}
                
              </Card>
              <Card className="back flip-card-back">
                <div className="back-content">
                  {isFront ? <p>{dummyData[number].c}</p> : <p>{dummyData[number].a}</p>}
                  {isRome && (
                    <>
                      <p className="rome">({dummyData[number].b})</p>
                    </>
                  )}
                </div>
              </Card>

            </div>
          </div>
          <Button style={{marginTop: "1rem" }} variant="contained" color="primary" onClick={() => showCard()}>
            Change
          </Button>
        </>
      )
    }

    if (mode === "Similar Combo") {
      return (
        <>
          <div 
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {similarSound[simNumber].map((sound) => {
              return (
                <div className="no-flip-card">
                  <div className="flip-card-inner">
                    <Card className="front flip-card-front">
                      <p>{sound}</p>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
          <Button style={{ marginTop: "1rem" }} variant="contained" color="primary" onClick={() => similarSoundCards()}>
            Change
          </Button>
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
          <Tab label="Similar Combo" />
        </Tabs>
        <div style={{ marginBottom: "2rem" }}>
          <Tooltip title="show romanization in card back side" aria-label="add">
            <Button disabled={mode === "Similar Combo"} color="primary" style={{ marginRight: "2rem" }} variant="outlined" onClick={() => setIsRome(!isRome)}>
              {isRome ? "Hide Pinyin" : "Show Pinyin"}
            </Button>
          </Tooltip>
          <Tooltip title="reverse the card" aria-label="add">
            <Button disabled={mode === "Similar Combo"} color="primary" variant="outlined" onClick={() => setIsFront(!isFront)}>
              Reverse
            </Button>
          </Tooltip>
          
          

        </div>
        
        

        {showContent()}
        
      </Container>
      


    </div>
    
    
  )
}

export default JapaneseWorld

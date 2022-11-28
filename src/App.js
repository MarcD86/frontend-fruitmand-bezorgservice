import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {

    const [strawberry, setStrawberry] = useState(0)
    const [banana, setBanana] = useState(0)
    const [kiwi, setKiwi] = useState(0)
    const [apple, setApple] = useState(0)

    function reset () {
        setStrawberry(0)
        setBanana (0)
        setKiwi(0)
        setApple(0)
    }

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);


    const [delivery, setDelivery] = useState(false);
    console.log(delivery)




    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    Voornaam: ${firstname}, 
    Achternaam: ${lastname}, 
    Leeftijd: ${age}, 
    Postcode: ${zipcode}, 
    Bezorgfrequentie: ${deliveryFrequency},
    Opmerkingen: ${remark},
    Algemene voorwaarden: ${agreeTerms}
    `);
        console.log(`Fruitmand bestelling - aardbeiden: ${strawberry}, bananen: ${banana}, appels: ${apple}, kiwi's: ${kiwi}`);
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>

    <div className="container">
        <div  className="fruitContainer">
        <article>
            <Counter
                className="fruitButton"
                buttonClass="buttonski"
                idFruit="aardb"
                fruitIcon="🍓"
                fruitName="Aarbei"
                type="button"
                fruitValue={strawberry}
                decrement={() => setStrawberry(strawberry => strawberry-1)}
                increment={() => setStrawberry(strawberry => strawberry+1)}
                isDisabled={(strawberry === 0)}
            />
        </article>
        <article>
            <Counter
                className="fruitButton"
                buttonClass="buttonski"
                idFruit="banana"
                fruitIcon="🍌"
                fruitName="Bananen"
                type="button"
                fruitValue={banana}
                decrement={() => setBanana(banana => banana-1)}
                increment={() => setBanana(banana => banana+1)}
                isDisabled={(banana === 0)}
            />
        </article>
        <article>
            <Counter
                className="fruitButton"
                buttonClass="buttonski"
                idFruit="appelski"
                fruitIcon="🍎"
                fruitName="Appels"
                type="button"
                fruitValue={apple}
                decrement={() => setApple(apple => apple-1)}
                increment={() => setApple(apple => apple+1)}
                isDisabled={(apple === 0)}
            />
        </article>
        <article>
            <Counter
                className="fruitButton"
                buttonClass="buttonski"
                idFruit="kiwiski"
                fruitIcon="🥝"
                fruitName="Kiwi's"
                type="button"
                fruitValue={kiwi}
                decrement={() => setKiwi(kiwi => kiwi-1)}
                increment={() => setKiwi(kiwi => kiwi+1)}
                isDisabled={(kiwi === 0)}
            />
        </article>
        <button onClick={reset}>Reset</button>
        </div>

        <form onSubmit={handleSubmit}>

        <div className="formClass">
        <label htmlFor="">
            Voornaam:
            <input onChange={(e) => setFirstname(e.target.value)}
                   type="text"
                   name="firstname"
                   value={firstname}
            />
        </label>
        <label htmlFor="">
            Achternaam:
            <input onChange={(e) => setLastname(e.target.value)}
                   type="text"
                   name="lastname"
                   value={lastname}
            />
        </label>
            <label htmlFor="">
                Leeftijd:
                <input onChange={(e) => setAge(e.target.value)}
                       type="number"
                       name="age"
                       value={age}
                />
            </label>
            <label htmlFor="">
                Postcode:
                <input onChange={(e) => setZipcode(e.target.value)}
                       type="text"
                       name="zipcode"
                       value={zipcode}
                />
            </label>
            <label htmlFor="">
                <h5>Bezorgfrequentie</h5>
                <select onChange={(e) => setDelivery(e.target.value)}
                        name="drop"
                        value={delivery}
                >
                    <option>Kies jouw dag</option>
                    <option>Om de week</option>
                    <option>Iedere maand</option>
                </select>
            </label>
            <label htmlFor="">
                    <input
                        type="radio"
                        value="daytime"
                        name="timeslot"
                        id="timeslot-field-daytime"
                        checked={deliveryTimeslot === 'daytime'}
                        onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                    />
                    <label htmlFor="timeslot-field-daytime">Overdag</label>
                    <input
                        type="radio"
                        value="evening"
                        checked={deliveryTimeslot === 'evening'}
                        onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                        name="timeslot"
                        id="timeslot-field-evening"
                    />
                    <label htmlFor="timeslot-field-evening">'s Avonds</label>
            </label>
            <label htmlFor="">
                Opmerkingen:
                <textarea
                       onChange={(e) => setRemark(e.target.value)}
                       type="text"
                       name="comment"
                       value={remark}
                       rows={4}
                       cols={30}
                />
            </label>
            <label htmlFor="">
                <input onChange={(e) => toggleAgreeTerms(e.target.checked)}
                       type="checkbox"
                       name="agree"
                       value={agreeTerms}
                /> Ik ga nergens mee akkoord
            </label>
            <label htmlFor="">
                <button type="submit" onClick={handleSubmit} value="submit">Verzend</button>
            </label>
        </div>
        </form>
    </div>

    </>
  );
}

export default App;

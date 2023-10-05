import React from 'react'
import './stylesheets/styles.css'
import logo from './assets/logo.svg'
import dollar from './assets/icon-dollar.svg'
import person from './assets/icon-person.svg'

export default function App () {
    return(
        <main className='container'>
            <img className='logo' src={logo} alt='Splitter' />

            <div className='calc'>
                <section>
                    <form>
                        <article>
                            <label>Bill</label>
                            <div>
                                <img src={dollar} alt='dollar $' />
                                <input type='number' placeholder='0' />
                            </div>
                        </article>

                        <article>
                            <label>Select Tip %</label>
                            <button>5%</button>
                            <button>10%</button>
                            <button>15%</button>
                            <button>25%</button>
                            <button>50%</button>
                            <input type='number' placeholder='Custom' />
                        </article>

                        <article>
                            <label>Number of People</label>
                            <div>
                                <img src={person} alt='person icon' />
                                <input type='number' placeholder='0' />
                            </div>
                        </article>
                    </form>
                </section>
                <section>
                    <div>
                        <article>
                            <div>
                                <h5>Tip amount</h5>
                                <p>/ person</p>
                            </div>
                            <h1>$0.00</h1>
                        </article>
                        <article>
                            <div>
                                <h5>Total</h5>
                                <p>/ person</p>
                            </div>
                            <h1>$0.00</h1>
                        </article>
                    </div>
                    <button>Reset</button>
                </section>
            </div>
        </main>
    )
}
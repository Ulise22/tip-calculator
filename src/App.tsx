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
                <section className='calc__1st-section'>
                    <form className='calc__1st-section__container'>
                        <article className='calc__1st-section__bill'>
                            <label className='calc__1st-section__bill__label'>Bill</label>
                            <div className='calc__1st-section__bill__container'>
                                <img className='calc__1st-section__bill__img' src={dollar} alt='dollar $' />
                                <input className='calc__1st-section__bill__input' type='number' placeholder='0' required />
                            </div>
                        </article>

                        <article className='calc__1st-section__btns__container'>
                            <label className='calc__1st-section__btns__label'>Select Tip %</label>
                            <button type='button' className='calc__1st-section__btn'>5%</button>
                            <button type='button' className='calc__1st-section__btn'>10%</button>
                            <button type='button' className='calc__1st-section__btn'>15%</button>
                            <button type='button' className='calc__1st-section__btn'>50%</button>
                            <button type='button' className='calc__1st-section__btn'>25%</button>
                            <input className='calc__1st-section__btns__input' type='number' placeholder='Custom' />
                        </article>

                        <article className='calc__1st-section__numofpeople'>
                            <label className='calc__1st-section__numofpeople__label'>Number of People</label>
                            <div className='calc__1st-section__numofpeople__container'>
                                <img className='calc__1st-section__numofpeople__img' src={person} alt='person icon' />
                                <input className='calc__1st-section__numofpeople__input' type='number' placeholder='0' required />
                            </div>
                        </article>
                    </form>
                </section>

                <section className='calc__2nd-section'>
                    <div className='calc__2nd-section__container'>
                        <article className='calc__2nd-section__bill'>
                            <div className='calc__2nd-section__bill__container'>
                                <h5 className='calc__2nd-section_bill__title'>Tip amount</h5>
                                <p className='calc__2nd-section__bill__p'>/ person</p>
                            </div>
                            <h1 className='calc__2nd-section__bill__result'>$0.00</h1>
                        </article>
                        <article className='calc__2nd-section__bill'>
                            <div className='calc__2nd-section__bill__container'>
                                <h5 className='calc__2nd-section_bill__title'>Total</h5>
                                <p className='calc__2nd-section__bill__p'>/ person</p>
                            </div>
                            <h1 className='calc__2nd-section__bill__result'>$0.00</h1>
                        </article>
                    </div>
                    <button className='calc__2nd-section__btn'>Reset</button>
                </section>
            </div>
        </main>
    )
}
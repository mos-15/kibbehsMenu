import '../App.css'
import KibbehData from "../kibbehData.jsx";
import Kibbeh from "./Kibbeh.jsx";


const Menu = () => {
    const kibbehs = KibbehData;
    const numKibbehs = kibbehs.length;

    return (
        <main className='menu'>
            <h2>قائمة الطعام</h2>
            {numKibbehs > 0 ? (
                <>
                    <p>"أشهى أنواع الكبة الحلبية الأصيلة. نقدم لك 6 أنواع مميزة لتختار من بينها. جميعها محضرة بمهارة
                        يدوية، بمكونات طبيعية وطازجة، وبنكهات تعكس روح حلب الأصيلة."
                    </p>

                    <ul className="kibbehs">
                        {kibbehs.map((kibbeh) =><Kibbeh kibbehObj={kibbeh} key={kibbeh.name} />)}
                            </ul>
                            </>
                            ) :
                            <p>ما زلنا نعمل على قائمتنا. يرجى العودة لاحقًا :)</p>}
                    </main>
                    )
                    }

                    export default Menu
import "./App.css";
import {
    WhatsappShareButton,
    TelegramShareButton,
} from "react-share";
import { ImLocation2 } from "react-icons/im";
import { MdContentCopy } from "react-icons/md";
import teleicon from "./Assets/Telegram.svg";
import waicon from "./Assets/Whatsapp.svg";

function App() {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
    };

    return (
        <div className="App">
            <div className="container-share">
                <div className="box-detailloker">
                    <div className="loker-detailloker">
                        <h2>Staff Admin</h2>
                        <b>Ganesha Operation Ciwastra</b>
                        <p>
                            <ImLocation2 />
                            Bandung, Barat
                        </p>
                    </div>
                    <div className="deskripsi-pekerjaan-detailloker">
                        <h5>Deskripsi Pekerjaan</h5>
                        <p>
                            There are many variations of passages of
                            Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by
                            injected humour, or randomised words which
                            don't look even slightly believable. There
                            are many variations of passages of Lorem
                            Ipsum available, but the majority have
                            suffered alteration in some form, by
                            injected humour, or randomised words which
                            don't look even slightly believable.There
                            are many variations of passages of Lorem
                            Ipsum.
                        </p>
                    </div>
                    <div className="kualifikasi-detailloker">
                        <h5>Kualifikasi</h5>
                        <ul>
                            <li>blablablabla</li>
                            <li>blablablabla</li>
                            <li>blablablabla</li>
                            <li>blablablabla</li>
                            <li>blablablabla</li>
                            <li>blablablabla</li>
                            <li>blablablabla</li>
                        </ul>
                    </div>
                </div>
                <button className="btn bg-warning">Lamar</button>
                <div className="social-share">
                    <TelegramShareButton
                        url={window.location.href}
                        quote="CampersTribe - World is yours to explore"
                        hashtag="#camperstribe"
                        className="telegram"
                    >
                        <img src={teleicon} />
                    </TelegramShareButton>

                    <WhatsappShareButton
                        url={window.location.href}
                        quote="CampersTribe - World is yours to explore"
                        hashtag="#camperstribe"
                        className="whatsapp"
                    >
                        <img src={waicon} />
                    </WhatsappShareButton>
                    <button onClick={copyToClipboard}>
                        <MdContentCopy /> Copy Link
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

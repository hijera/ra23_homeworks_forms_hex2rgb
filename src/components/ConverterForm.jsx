import React,{useState} from 'react';


function ConverterForm(props) {
    const [form, setForm] = useState({
        rgb: '',
        styleCSS:null,
        caption:'',
    });

    const handleRGBChange = ({target}) =>
    {
        if (target.value.length===7)
        {
            if (target.value.match(/#[0-9A-Fa-f]{6}/))
            {
                let parsed=target.value.replace(/^#/,'');
                const r=parseInt(parsed.slice(0,2),16);
                const g=parseInt(parsed.slice(2,4),16);
                const b=parseInt(parsed.slice(4,6),16);
                setForm(prevForm => ({...prevForm,rgb:target.value,styleCSS:{'backgroundColor':target.value},caption:('rgb('+r+','+g+','+b+')')}))
            }
            else
            {
                setForm(prevForm=>({...prevForm,rgb:target.value,caption:'Ошибка!'}))
            }
        }
        else
        {
            setForm(prevForm => ({...prevForm,rgb:target.value.slice(0,7)}))
        }
    };
    return (
        <div className="form-background" style={form.styleCSS} >
            <form  className="form-block">
                <input className='rgb' name="rgb" value={form.rgb}  onChange={handleRGBChange} />
                <div className='form-caption'>{form.caption}</div>
            </form>
        </div>
    );
}

export default ConverterForm;
import { InputStyle } from "./style"

function Input ({
    bd_width=1, 
    bd_color="none", 
    bg="white", 
    c="black", 
    radius=4, 
    w=133, 
    h=38, 
    text, 
    mob_w, 
    mob_h, 
    font_s, 
    mob_font,
    type="text",
    m,
    p
    }) {
    return (
        <InputStyle
            width={w} 
            height={h} 
            background={bg}
            border_color={bd_color}
            border_width={bd_width}
            border_radius={radius}
            color={c}
            width_mobile={mob_w}
            height_mobile={mob_h}
            fonte={font_s}
            fonte_mobile={mob_font}
            padding={p}
            margin={m}
            type={type}
            placeholder={text}
            />
    )
}

export default Input
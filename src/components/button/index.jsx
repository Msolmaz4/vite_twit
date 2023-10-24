import { createElement } from "react";
import classNames from "classnames";

export default function Button({ size,children }){
    return createElement('button',
   { className :classNames('bg-[#1d9bf0] rounded-full text-white justify-center font-bold hover:bg-[#1a8cd8] transition-colors',{
     'px-4': size === 'normal',
     'px-4 text-[17px] h-[52px] w-full' :size === 'large'
   })
},children )
}

Button.PropTypes ={
  //size : PropTypes.oneOf(['normal','large'])

}
Button.defaultsProps = {
size:'normal'
}
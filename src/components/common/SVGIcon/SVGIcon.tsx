import cn from 'classnames';
import { SVGIconProps } from './SVGIcon.props.ts';
import styles from './SVGIcon.module.css';

function SVGIcon({ urlSvgIcon, className }: SVGIconProps) {
  const cl = cn(styles['svg-icon'], className);

  return (
    <div
      className={cl}
      style={{
        maskImage: `url(${urlSvgIcon})`,
        WebkitMaskImage: `url(${urlSvgIcon})`,
      }}
    />
  );
}

export default SVGIcon;

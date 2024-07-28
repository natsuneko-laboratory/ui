import React from "react";
import { ChromePicker, type ColorResult } from "react-color";
import { classnames } from "../../utils/class";

type Props = {
  initialColor?: string;
  disabled?: boolean;
  onChange?: (color: string) => void;
};

class ColorPicker extends React.Component<
  Props,
  { color: string; state: boolean }
> {
  constructor(props: Props) {
    super(props);
    this.state = { color: props.initialColor ?? "#fff", state: false };
  }

  handleChange = (color: ColorResult) => {
    const { rgb } = color;
    this.setState({
      color: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a ?? 1})`,
    });
  };

  handleChangeComplete = (color: ColorResult) => {
    const { rgb } = color;
    this.setState({
      color: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a ?? 1})`,
    });
    if (this.props.onChange) {
      this.props.onChange(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a ?? 1})`);
    }
  };

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState({ state: !this.state.state });
  };

  render(): React.ReactNode {
    return (
      <div className="relative">
        <div
          className={classnames(
            "relative p-1 bg-white rounded-sm cursor-pointer inline-block",
            this.props.disabled && "opacity-50 cursor-default"
          )}
          onKeyDown={this.handleClick}
          onClick={this.handleClick}
          style={{
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          }}
        >
          <div
            className="w-24 h-6 rounded-sm"
            style={{ background: this.state.color }}
          />
        </div>

        {this.state.state && (
          <div className="absolute z-10">
            <div
              className="fixed inset-0"
              onClick={this.handleClick}
              onKeyDown={this.handleClick}
            />
            <ChromePicker
              color={this.state.color}
              onChange={this.handleChange}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
        )}
      </div>
    );
  }
}

export { ColorPicker };

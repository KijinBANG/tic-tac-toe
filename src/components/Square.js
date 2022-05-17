import './style.css'

export default function Square(props) {
    // the codes below are not necessary because Square no longer keeps track of the game's state.
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: this.props.value,
    //     }
    // }
    // render() {
        return (
            <button
                className={'square'}
                onClick={props.onClick}
                // onClick={() => {
                //     console.log(this.props.value + ' is Clicked in \'Square\' Component!')
                //     // // const val = this.state.value === this.props.value ? 'X' : this.props.value;
                //     // this.setState({value: this.state.value === this.props.value ? 'X' : this.props.value})
                //     this.props.onClick()
                // }}
            >
            {props.value}
            </button>
        );
    // }
}
// export default class SetingsScreen extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//     };
//   }

//   modificaEstadoToggle(value) {
//     this.setState({ estaAtivado: value });
//   }

//   modificaEstadoInput(value) {
//     this.setState({ text: value });
//   }

//   render() {
//     return (
//       <ScrollView>
//         <View>
//           <View>
//             {Platform.OS === 'ios' ? <Switch onValueChange={(value) => this.modificaEstadoToggle(value)} value={this.state.estaAtivado} /> : <CheckBox onValueChange={(value) => this.modificaEstadoToggle(value)} value={this.state.estaAtivado} />}
//           </View>
//           <TextInput
//             onChangeText={(value) => this.modificaEstadoInput({ value })}
//             style={styles.textEstilo1}
//             placeholder='Digite aqui'
//             value={this.state.text}
//           />
//         </View>
//       </ScrollView>
//     );
//   }
// }
var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem row'}>
        <div className={'col-4'}>
          <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}> 
        </div>
        <div className={'col-8'}>
          <p className={'contactLabel'}>
            Imię: {this.props.item.firstName}
          </p>
          <p className={'contactLabel'}>
            Nazwisko: {this.props.item.lastName}
            </p>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
            Email: {this.props.item.email}
            </a>
        </div>
      </div>
        );
   
  }
});


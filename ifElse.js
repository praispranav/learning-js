function abc( name ) {
    if( name.length == 5 ) { // > < ==

        console.log("Not Qualified", name);

    } else if ( name.length == 6 ){

        console.log("Qualified", name)

    }else {

        console.log("Name is not equal to 5", name);

    }

    // if( name.length <= 5 ) { // > < ==
    //     console.log(name);
    // }
    // if( name.length > 5 ) { // > < ==
    //     console.log(name);
    // }
}

abc("Pranav")
abc("Omkar")
abc("Prem")
abc("Naveen")
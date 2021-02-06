const getMate = () =>{
    return {
        createAt: {
            type: Number,
            default: (new Date()).getDate(),
        },
        updateAt: {
            type: Number,
            default: (new Date()).getDate(),
        },
    };
};

module.exports ={
  getMate,
};

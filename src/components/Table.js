import React from 'react'
import {connect} from 'react-redux'

class Table extends React.Component{

    handleSort=(cli)=>{
            if(cli.sortable==="true"){
                this.props.tableData.rowData.forEach((r)=>{
                    
                })
            }
        
    }
    render(){
        return(
            <div>
                <h1>Table</h1>
                <table border="1">
                    <thead>
                        <tr>
                            {this.props.tableData.columnHeaders.map((c)=>{
                                return (
                                    <th onClick={()=>this.handleSort(c)} key={c.id}>
                                        {c.label}
                                    </th>
                                )
                            })}
                        </tr>
                        
                    </thead>
                    <tbody>
                       {
                           this.props.tableData.rowData.map((r)=>{
                               return (
                                   <tr key={r.id}>
                                   {r.data.map((d)=>{
                                        return (
                                            <td key={d.id}>
                                                {d.value}
                                            </td>
                                        )
                                   })}
                                   </tr>
                               )
                           })
                       }
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
        return{
            tableData:state.tableData
        }
}

export default connect(mapStateToProps)(Table)


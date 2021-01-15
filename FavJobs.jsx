import React, { Component } from 'react';

class FavouriteJobs extends Component {

    constructor(props){
        super(props)
    
        this.state = {
           fav_jobs: []
        }
      }

    render() {
        return (
            <div>
             <h2 className="text-center"> Favourite Jobs</h2>
             <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <th>Job Id</th>
                        <th>JobSeeker Id</th>
                        <th>Action</th>
                    </thead>

                    <tbody>
                     {
                       this.state.fav_jobs.map(
                       job => 
                       <tr key = {job.id}>
                           <td>{job.job_id}</td>
                           <td>{job.jobseeker_id}</td>
                           <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.addToApply(job.id)} className = "btn btn-info">Add To Apply</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteFavJob(job.id)} className = "btn btn-danger">Delete</button>
                                        </td>
                       </tr>
                      )
                     }
                    </tbody>
               </table>
            </div>
        </div>
        );
    }
}

export default FavouriteJobs;

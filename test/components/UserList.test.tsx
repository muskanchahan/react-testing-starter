import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom';
import UserList from '../../src/components/UserList'; // Adjust the path as needed
import {User} from "../../src/entities"
 

describe('Userlist', () => {
    it('should render no user when the user array is empty', () => {
        render(<UserList users ={[]}/>);
         expect(screen.getByText(/No users available/i)).toBeInTheDocument();
    });
    it('should render a list of users', () => {
        const users:User[]=[
            {id:1,name:"Mosh"},
            {id:2,name:"John"}
        ]
        render(<UserList users ={users}/>);
         users.forEach(user=>{
           const link= screen.getByRole('link',{name:user.name});
           expect(link).toBeInTheDocument();
           expect(link).toHaveAttribute('href',`/users/${user.id}`)
         })
    });
 })
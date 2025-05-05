import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom';
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";


describe("UserAccount", () => {
    it('should rander user name ', () => {
      const user: User = { id: 1, name: "Mosh" };
      render(<UserAccount user={user} />);
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });
    it('should rander edit button if user is admin', () => {
        const user: User = { id: 1, name: "Mosh",  isAdmin:true};
        render(<UserAccount user={user}/>)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i)
      });

      it('should not rander edit button if user is not admin', () => {
        const user: User = { id: 1, name: "Mosh",  isAdmin:false};
        render(<UserAccount user={user}/>)
        const button = screen.queryByRole("button");
        expect(button).not.toBeInTheDocument();
      });
 });
 
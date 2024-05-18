package com.example.demo.Transaction;

import com.example.demo.Bienimmobilier.Bienimmobilier;
import com.example.demo.Client.Client;
import jakarta.persistence.*;

@Entity
@Table(name = "Transaction")
public class Transaction {
    @Id
    @SequenceGenerator(
            name = "Transaction_sequence",
            sequenceName = "Transaction_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "Transaction_sequence"
    )
    @Column(name = "id",
            updatable = false
    )
    private int id;
    @Column(name = "amount")
    private int amount;
    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client id_client;
    @ManyToOne
    @JoinColumn(name = "id_bien")
    private Bienimmobilier id_bien;
    @Column(name = "type")
    private Transactiontype type;
    public Transaction() {}

    public Transaction(int amount, Client client, Bienimmobilier bien, Transactiontype type) {
        this.amount = amount;
        this.id_client = client;
        this.id_bien = bien;
        this.type = type;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Client getClient() {
        return id_client;
    }

    public void setClient(Client client) {
        this.id_client= client;
    }

    public Bienimmobilier getBien() {
        return id_bien;
    }

    public void setBien(Bienimmobilier bien) {
        this.id_bien = bien;
    }

    public Transactiontype getType() {
        return type;
    }

    public void setType(Transactiontype type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", amount=" + amount +
                ", client=" + id_client +
                ", bien=" + id_bien +
                ", type=" + type +
                '}';
    }
}

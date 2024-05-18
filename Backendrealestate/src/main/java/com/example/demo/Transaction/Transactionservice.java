package com.example.demo.Transaction;

import com.example.demo.Bienimmobilier.Bienimmobilier;
import com.example.demo.Bienimmobilier.BienimmobilierRepository;
import com.example.demo.Client.Client;
import com.example.demo.Client.Clientrepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class Transactionservice {
    private final Transactionrepository transactionrepository;
    private final BienimmobilierRepository bienimmobilierRepository;
    private final Clientrepository clientrepository;

    @Autowired
    public Transactionservice(Transactionrepository transactionrepository, BienimmobilierRepository bienimmobilierRepository, Clientrepository clientrepository) {
        this.transactionrepository = transactionrepository;
        this.bienimmobilierRepository = bienimmobilierRepository;
        this.clientrepository = clientrepository;
    }

    public List<Transaction> Gettransaction() {
        return transactionrepository.findAll();
    }

    public void addNewtransaction(Transaction transaction) {
        transactionrepository.save(transaction);
    }

    public void deleteBien(int tranid) {
        boolean exists = transactionrepository.existsById(tranid);
        if (!exists) {
            throw new IllegalStateException("bien does not exist");
        }
        transactionrepository.deleteById(tranid);

    }

    @Transactional
    public void updatetransaction(int tranid, int amount, Transactiontype type) {
        Transaction transaction = transactionrepository.findById(tranid).orElseThrow(() -> new IllegalStateException("transaction not found"));
        if (amount > 0 && !Objects.equals(transaction.getAmount(), amount)) {
            transaction.setAmount(amount);
        }
        if (type !=null && !Objects.equals(transaction.getType(), type)) {
            transaction.setType(type);
        }
    }
}

package com.example.demo.Transaction;

import com.example.demo.Bienimmobilier.Bienimmobilier;
import com.example.demo.Bienimmobilier.BienimmobilierRepository;
import com.example.demo.Bienimmobilier.BienimmobilierService;
import com.example.demo.Client.Client;
import com.example.demo.Client.Clientrepository;
import com.example.demo.Client.Clientservice;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/transaction")
public class Transactioncontroller {
    private final Transactionservice transactionservice;
    private final BienimmobilierRepository bienimmobilierRepository;
    private final Clientrepository clientrepository;

    @Autowired
    public Transactioncontroller(Transactionservice transactionservice, BienimmobilierRepository bienimmobilierRepository, Clientrepository clientrepository) {
        this.transactionservice = transactionservice;
        this.bienimmobilierRepository = bienimmobilierRepository;
        this.clientrepository = clientrepository;
    }
    @GetMapping
    public List<Transaction> getTransactions() {
        return transactionservice.Gettransaction();
    }
    @PostMapping
    public void registerNewStudent(@RequestBody Transaction transaction){
        transactionservice.addNewtransaction(transaction);
    }

    @DeleteMapping(path = "{tranid}")
    public void deleteTransaction(@PathVariable("tranid") int tranid){
        transactionservice.deleteBien(tranid);
    }
    @PutMapping(path="{tranid}")
    public void updatetransaction(@PathVariable("tranid") int tranid,
                              @RequestParam(required = false) int amount,
                              @RequestParam(required = false) Transactiontype type){
        transactionservice.updatetransaction(tranid,amount, type);
    }

}

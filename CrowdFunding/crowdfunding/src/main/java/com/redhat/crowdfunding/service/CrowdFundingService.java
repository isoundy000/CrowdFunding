package com.redhat.crowdfunding.service;

import java.util.List;
import java.util.concurrent.ExecutionException;

import com.redhat.crowdfunding.bean.Fund;

/**
 * @author littleredhat
 */
public interface CrowdFundingService {

	// �ڳ��б�
	public List<Fund> getFunds() throws InterruptedException, ExecutionException;

	// �����ڳ�
	public boolean raiseFund(String owner) throws InterruptedException, ExecutionException;

	// ���ͽ��
	public boolean sendCoin(String owner, int coin) throws InterruptedException, ExecutionException;
}